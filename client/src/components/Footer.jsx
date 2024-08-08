import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="lg:mt-[100px] lg:mx-[95px] lg:mb-[20px] divide-y divide-solid ">
      <div className="flex gap-[50px] items-center justify-center">
        <div className="socials">
          <a
            href="http://www.instagram.com/7.ninenine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </div>
      </div>
      <div className="lg:flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="logo">
            <Link to="/">
              <img className="h-16 lg:h-20" src="/img/placeholder-logo-1.png" />
            </Link>
          </span>
          <span className="text-sm text-gray-500 ml-7">
            © Copyright 2024. Todos los derechos reservados.
          </span>
        </div>
        <div className="flex items-center justify-center">
          <img className="h-8 lg:h-14" src="/img/payment.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
