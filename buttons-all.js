<div id='prouduct-wrapper' style='padding: 0 3em; max-width: 1280px; margin: 0 auto;'>
    <div id='collection-component-79590a2ffd3'></div>
</div>
<script type="text/javascript">
/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'vaultice.myshopify.com',
      apiKey: '72cf5d7af5dd70a3ac182f11fb0ec62a',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 30471323703,
        node: document.getElementById('collection-component-79590a2ffd3'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "VIEW PRODUCT"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "imgWrapper": {
        "width": "100%",
        "height": "15em",
        "padding": "1em"
      },
      "img": {
        "max-width": "100%",
        "height": "100%"
      },
      "button": {
        "background-color": "#ffffff",
        "border": "1px solid #000000",
        "color": "#000000",
        ":hover": {
          "background-color": "#000000",
          "color": "#ffffff"
        },
        "border-radius": "35px",
        ":focus": {
          "background-color": "#ffffff",
          "color": "#000000"
        }
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#000000",
        "color": "#ffffff",
        ":hover": {
          "background-color": "#000000"
        },
        "border-radius": "35px",
        ":focus": {
          "background-color": "#000000"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#ffffff",
        "color": "#000000",
        "border": "1px solid #d3dbe2 !important",
        ":hover": {
          "background-color": "#000000",
          "color": "#ffffff",
          "border-color": "#000000 !important"
        },
        "border-radius": "35px",
        ":focus": {
          "background-color": "#ffffff",
          "color": "#000000"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
/*]]>*/
</script>