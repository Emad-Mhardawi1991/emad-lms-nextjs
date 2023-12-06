import  Link  from "next/link";
import  Image  from "next/image";

interface LogoProps {
  href?: string;
  className?: string;
}

const Logo = ({ href, className }: LogoProps) => {
  if (href) {
    return (
      <Link href={href}>
        <Image className={className} priority={true} height ={130} width={130} alt= 'logo' src='/images/logo.svg' />
      </Link>
    );
  }

  return <Image  className={className} priority={true} height ={130} width={130} alt= 'logo' src='/images/logo.svg' />;
};

export default Logo;
