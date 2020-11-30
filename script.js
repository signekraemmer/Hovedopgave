
* {
      box-sizing: border-box;
}

html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
}

body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      font-family: Poppins;
      font-weight: 400;
}

nav {
      padding: 10px 100px;

}


main{
      margin: 125px;

}

img{

  width: 30%;
  margin-top: -10px;
}

.logo {
      float: left;
      padding: 8px;
      margin-left: 16px;
      margin-top: 8px;
}

.logo a {
      color: black;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 0px;
      text-decoration: none;

}

nav ul {
      float: right;
}

nav ul li {
      display: inline-block;
      float: left;
}

nav ul li:not(:first-child) {
      margin-left: 42px;
}

nav ul li:last-child {
      margin-right: 25px;
}

nav ul li a {
      display: inline-block;
      outline: none;
      color: #000;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 14px;
      letter-spacing: 1px;
      font-weight: 400;
}

@media screen and (max-width: 864px) {
      .logo {
            padding: 0;
      }

      .nav-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: #fff;
            opacity: 0;
            transition: all 0.2s ease;
      }

      .nav-wrapper ul {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
      }

      .nav-wrapper ul li {
            display: block;
            float: none;
            width: 100%;
            text-align: right;
            margin-bottom: 10px;
      }

      .nav-wrapper ul li:nth-child(1) a {
            transition-delay: 0.2s;
      }

      .nav-wrapper ul li:nth-child(2) a {
            transition-delay: 0.3s;
      }

      .nav-wrapper ul li:nth-child(3) a {
            transition-delay: 0.4s;
      }

      .nav-wrapper ul li:nth-child(4) a {
            transition-delay: 0.5s;
      }

      .nav-wrapper ul li:not(:first-child) {
            margin-left: 0;
      }

      .nav-wrapper ul li a {
            padding: 10px 24px;
            opacity: 0;
            color: #000;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1.2px;
            transform: translateX(-20px);
            transition: all 0.2s ease;
      }
