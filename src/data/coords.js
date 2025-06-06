const Coords = {
  // continentes
  "america": { lat: 15.0, lng: -90.0 },
  "america del norte": { lat: 54.526, lng: -105.255 },
  "america del sur": { lat: -8.7832, lng: -55.4915 },
  "africa": { lat: 1.6508, lng: 17.6874 },
  "asia": { lat: 34.0479, lng: 100.6197 },
  "europa": { lat: 54.526, lng: 15.2551 },
  "oceania": { lat: -22.7359, lng: 140.0188 },
  "antartida": { lat: -82.8628, lng: 135.0000 },
  "siberia": { lat: 60.0, lng: 105.0 }, // no es un continente pero es muy grande
  "norte de africa": { lat: 28.0, lng: 10.0 },    
  "sur de africa": { lat: -30.0, lng: 24.0 },

  // paises
  "afganistan": { lat: 33.93911, lng: 67.709953 },
  "alemania": { lat: 51.1657, lng: 10.4515 },
  "argentina": { lat: -38.4161, lng: -63.6167 },
  "australia": { lat: -25.274398, lng: 133.775136 },
  "austria": { lat: 47.5162, lng: 14.5501 },
  "bahamas": { lat: 25.03428, lng: -77.39628 },
  "banglades": { lat: 23.685, lng: 90.3563 },
  "belgica": { lat: 50.8503, lng: 4.3517 },
  "brasil": { lat: -14.235004, lng: -51.92528 },
  "canada": { lat: 56.130366, lng: -106.346771 },
  "chile": { lat: -35.6751, lng: -71.543 },
  "china": { lat: 35.86166, lng: 104.195397 },
  "colombia": { lat: 4.5709, lng: -74.2973 },
  "cuba": { lat: 21.521757, lng: -77.781167 },
  "dinamarca": { lat: 56.2639, lng: 9.5018 },
  "ecuador": { lat: -1.8312, lng: -78.1834 },
  "espana": { lat: 40.463667, lng: -3.74922 },
  "estados unidos": { lat: 37.09024, lng: -95.712891 },
  "etiopia": { lat: 9.145, lng: 40.489673 },
  "filipinas": { lat: 12.8797, lng: 121.774 },
  "finlandia": { lat: 61.9241, lng: 25.7482 },
  "francia": { lat: 46.227638, lng: 2.213749 },
  "grecia": { lat: 39.0742, lng: 21.8243 },
  "guatemala": { lat: 15.7835, lng: -90.2308 },
  "honduras": { lat: 15.199999, lng: -86.241905 },
  "india": { lat: 20.593684, lng: 78.96288 },
  "indonesia": { lat: -0.7893, lng: 113.9213 },
  "irlanda": { lat: 53.1424, lng: -7.6921 },
  "islandia": { lat: 64.9631, lng: -19.0208 },
  "israel": { lat: 31.0461, lng: 34.8516 },
  "italia": { lat: 41.8719, lng: 12.5674 },
  "jamaica": { lat: 18.1096, lng: -77.2975 },
  "japon": { lat: 36.2048, lng: 138.2529 },
  "kenia": { lat: -0.0236, lng: 37.9062 },
  "madagascar": { lat: -18.7669, lng: 46.8691 },
  "malasia": { lat: 4.2105, lng: 101.9758 },
  "mexico": { lat: 23.6345, lng: -102.5528 },
  "marruecos": { lat: 31.7917, lng: -7.0926 },
  "mongolia": { lat: 46.8625, lng: 103.8467 },
  "nepal": { lat: 28.3949, lng: 84.124 },
  "nueva zelanda": { lat: -40.9006, lng: 174.886 },
  "nicaragua": { lat: 12.8654, lng: -85.2072 },
  "nigeria": { lat: 9.082, lng: 8.6753 },
  "noruega": { lat: 60.472, lng: 8.4689 },
  "panama": { lat: 8.538, lng: -80.7821 },
  "paraguay": { lat: -23.4425, lng: -58.4438 },
  "peru": { lat: -9.19, lng: -75.0152 },
  "polonia": { lat: 51.9194, lng: 19.1451 },
  "portugal": { lat: 39.3999, lng: -8.2245 },
  "rusia": { lat: 61.524, lng: 105.3188 },
  "sudafrica": { lat: -30.5595, lng: 22.9375 },
  "suecia": { lat: 60.1282, lng: 18.6435 },
  "suiza": { lat: 46.8182, lng: 8.2275 },
  "tailandia": { lat: 15.87, lng: 100.9925 },
  "turquia": { lat: 38.9637, lng: 35.2433 },
  "ucrania": { lat: 48.3794, lng: 31.1656 },
  "uruguay": { lat: -32.5228, lng: -55.7658 },
  "venezuela": { lat: 6.4238, lng: -66.5897 },
  "vietnam": { lat: 14.0583, lng: 108.2772 },

  // islas
  "isla mauricio": { lat: -20.348404, lng: 57.552152 },
  "hawai": { lat: 20.7967, lng: -156.3319 },
  "galapagos": { lat: -0.953769, lng: -90.9656 },
  "canarias": { lat: 28.2916, lng: -16.6291 },
  "malvinas": { lat: -51.7963, lng: -59.5236 },
  "azores": { lat: 37.7412, lng: -25.6756 },
  "reunion": { lat: -21.1151, lng: 55.5364 },
  "islas malvinas": { lat: -51.7963, lng: -59.5236 },
  "tasmania": { lat: -42.0409, lng: 146.8087 },

  // oceanos
  "atlantico": { lat: 0, lng: -30 },
  "atlantico norte": { lat: 30, lng: -40 },
  "atlantico sur": { lat: -30, lng: -20 },
  "pacifico": { lat: 0, lng: -160 },
  "pacifico norte": { lat: 30, lng: -150 },
  "pacifico sur": { lat: -30, lng: -140 },
  "indico": { lat: -20, lng: 80 },
  "indico norte": { lat: 10, lng: 70 },
  "indico sur": { lat: -40, lng: 90 },
  "artico": { lat: 80, lng: 0 },
  "antartico": { lat: -75, lng: 0 },

  // solo testeo
  "acuario de agua dulce": { lat: 43.2504, lng: -5.9833}
};

export default Coords;
