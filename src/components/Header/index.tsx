import Image from "next/image";
import { HeaderContainer } from "./styled";

interface IHeaderProps {
  title: string;
  subtitle: string;
  icon: string;
}

export const Header = ({ title, subtitle, icon }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <div>
        <div>
          <Image alt="" src={icon} aria-hidden />
          <h1>{title}</h1>
        </div>
        <h2>{subtitle}</h2>
      </div>
      {/* <button>Reiniciar dia</button> */}
    </HeaderContainer>
  );
};
