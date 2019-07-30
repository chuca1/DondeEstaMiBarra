import React from "react";
export const Nav00DataSource = {
  wrapper: { className: "header0 home-page-wrapper" },
  page: { className: "home-page jyp7py41qet-editor_css" },
  logo: {
    className: "header0-logo",
    children:
      "https://res.cloudinary.com/chuca/image/upload/v1564458783/logo_byjkux.png"
  },
  Menu: {
    className: "header0-menu",
    children: [
      { name: "item1", a: { children: "Login", href: "/login" } },
      { name: "item2", a: { children: "Signup", href: "/signup" } }
    ]
  },
  mobileMenu: { className: "header0-mobile-menu" }
};
export const Banner00DataSource = {
  wrapper: { className: "banner0 jyp6xdkhix8-editor_css" },
  textWrapper: { className: "banner0-text-wrapper" },
  title: {
    className: "banner0-title",
    children:
      "https://res.cloudinary.com/chuca/image/upload/v1564458976/logo_byjkux_cybll7.png"
  },
  content: {
    className: "banner0-content jyp7budwsq-editor_css",
    children: (
      <>
        <h2>
          <b>La pasión a tu equipo cerca de ti siempre</b>
        </h2>
      </>
    )
  },
  button: { className: "banner0-button", children: "Learn More" }
};
export const Feature10DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children:
      "https://www.paredesoriginales.com/938-large_default/vinilo-aficion-futbol.jpg"
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: {
    className: "content1-title",
    children: (
      <>
        <p>Que es donde esta mi Hinchada?</p>
      </>
    )
  },
  content: {
    className: "content1-content",
    children: (
      <>
        <p>
          Una pagina donde puedes encontrar donde ver a tu equipo favorito
          semana tras semana con gente que tiene el mismo sentimiento que tú.
        </p>
        <p>
          Publica, comparte y crea eventos para tu comunidad favorita, la
          aficion de tu equipo.
        </p>
      </>
    )
  }
};
export const Content00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.2, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <>
            <p>Que es Donde esta mi Hinchada?</p>
          </>
        )
      }
    ]
  },
  block: {
    className: "block-wrapper",
    children: [
      {
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "icon",
            children:
              "https://www.sportsalliance.com/sites/sportsalliance.com/files/styles/icon_w_220/public/icons/appbar.stadium.png?itok=ptb58lju"
          },
          title: {
            className: "content0-title",
            children: (
              <>
                <p>Tu ambiente favorito en donde estes</p>
              </>
            )
          },
          content: {
            children: (
              <>
                <p>Lo que tanto extrañas ahora cerca de ti</p>
              </>
            )
          }
        }
      },
      {
        name: "block1",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "icon",
            children: "https://image.flaticon.com/icons/png/512/53/53283.png"
          },
          title: {
            className: "content0-title",
            children: (
              <>
                <p>Todo a unos click de distancia&nbsp;</p>
              </>
            )
          },
          content: {
            children: (
              <>
                <p>
                  Encuentra donde ver a tu equipo favorito con hinchas como tu
                </p>
              </>
            )
          }
        }
      },
      {
        name: "block2",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "icon",
            children: "https://image.flaticon.com/icons/png/512/26/26341.png"
          },
          title: {
            className: "content0-title",
            children: (
              <>
                <p>&nbsp;Encuentra nuevos amigos a tu alrededor&nbsp;</p>
              </>
            )
          },
          content: {
            children: (
              <>
                <p>Por que la pasión al futbol se comparte</p>
              </>
            )
          }
        }
      }
    ]
  }
};
export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.02 },
  copyright: {
    className: "copyright",
    children: (
      <>
        <p>El amor a tu equipo se comparte no se esconde&nbsp;</p>
      </>
    )
  }
};
