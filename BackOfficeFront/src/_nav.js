export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Minha Conta',
      url: '/users',
      icon: 'cui-inbox',
      title: true
    },
    {
      name: 'Meus Dados',
      url: '/userdata',
      icon: 'icon-people',
    },
    {
      name: 'Meu Plano',
      url: '/plans',
      icon: 'cui-briefcase',
      badge: {
        variant: 'warning',
        text: 'Em Breve',
      }
    },
    {
      title: true,
      name: 'Financeiro',
    },
    {
      name: 'Pagamentos',
      url: '/payments',
      icon: 'cui-calculator',
      badge: {
        variant: 'warning',
        text: 'Em Breve',
      }
    },
    {
      title: true,
      name: 'Rede',
    },
    {
      name: 'Minha Rede',
      url: '/network',
      icon: 'cui-people',
      badge: {
        variant: 'warning',
        text: 'Em Breve',
      }
    },
    {
      title: true,
      name: 'Material de Apoio',
    },
    {
      name: 'Arquivos',
      url: '/files',
      icon: 'cui-info',
      badge: {
        variant: 'warning',
        text: 'Em Breve',
      }
    }
  ],
};

// {
//   name: 'Dashboard',
//   url: '/dashboard',
//   icon: 'icon-speedometer',
//   badge: {
//     variant: 'danger',
//     text: 'NEW',
//   },
// },

// {
//   title: true,
//   name: 'Theme',
//   wrapper: {            // optional wrapper object
//     element: '',        // required valid HTML5 element tag
//     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
//   },
//   class: ''             // optional class names space delimited list for title item ex: "text-center"
// },

  //{
  //   name: 'Download CoreUI',
  //   url: 'https://coreui.io/react/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success',
  //   attributes: { target: '_blank', rel: "noopener" },
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'https://coreui.io/pro/react/',
  //   icon: 'icon-layers',
  //   variant: 'danger',
  //   attributes: { target: '_blank', rel: "noopener" },
  // },
