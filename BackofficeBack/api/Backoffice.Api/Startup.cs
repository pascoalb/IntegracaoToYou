using System.Globalization;
using Backoffice.Api.Extensions;
using Backoffice.Infra.Authentication;
using Backoffice.Infra.Repositories;
using Backoffice.Infra.Repositories.Support;
using Backoffice.Infra.Services;
using Backoffice.Infra.Services.Support;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

namespace Backoffice.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
                .AddNewtonsoftJson(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

            var signingConfigurations = new SigningConfigurations();
            services.AddSingleton(signingConfigurations);
            var tokenConfigurations = new TokenConfigurations();
            new ConfigureFromConfigurationOptions<TokenConfigurations>(
                    Configuration.GetSection("TokenConfigurations"))
                    .Configure(tokenConfigurations);
            services.AddSingleton(tokenConfigurations);
            services.AddAuthJwtConfigurations(signingConfigurations, tokenConfigurations);
            
            services.AddResponseCompression();
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", builder =>
                    builder.AllowAnyOrigin()
                           .AllowAnyMethod()
                           .AllowAnyHeader().Build());
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Api Backoffice", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Autentica��o baseada em Json Web Token (JWT)",
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey
                });
            });

            services.AddControllers();
            services
                .AddTransient<IConnectionFactory, ConnectionFactory>()
                .AddTransient<IUsuarioRepository, UsuarioRepository>()
                .AddTransient<IEnderecoRepository, EnderecoRepository>()
                .AddTransient<IUsuarioService, UsuarioService>()
                .AddTransient<IEnderecoService, EnderecoService>()
                .AddTransient<IPlanosService, PlanosSevice>()
                .AddTransient<IPlanosRepository, PlanosRepository>()
                .AddTransient<IBonusService, BonusService>()
                .AddTransient<IBonusDiretoRepository, BonusDiretoRepository>()
                .AddTransient<IBonusIndiretoRepository, BonusIndiretoRepository>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            var cultureInfo = new CultureInfo("pt-BR");
            CultureInfo.DefaultThreadCurrentCulture = cultureInfo;
            CultureInfo.DefaultThreadCurrentUICulture = cultureInfo;

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.RoutePrefix = "swagger";
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "API Backoffice");
                });
            }

            app.UseRouting();
            app.UseAuthorization();
            app.UseCors("AllowAll");
            app.UseResponseCompression();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
