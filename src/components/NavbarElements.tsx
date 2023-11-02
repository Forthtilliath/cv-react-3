import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCopy,
  faIdBadge,
  faGraduationCap,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { List } from "@mui/material";

const elements = [
  {
    to: "/",
    icon: <FontAwesomeIcon icon={faHome} size="lg" />,
    label: "Home",
  },
  {
    to: "/skills",
    icon: <FontAwesomeIcon icon={faCopy} size="lg" />,
    label: "Skills",
  },
  {
    to: "/experiences",
    icon: <FontAwesomeIcon icon={faIdBadge} size="lg" />,
    label: "Experiences",
  },
  {
    to: "/education",
    icon: <FontAwesomeIcon icon={faGraduationCap} size="lg" />,
    label: "Education",
  },
  {
    to: "/portfolio",
    icon: <FontAwesomeIcon icon={faAddressCard} size="lg" />,
    label: "Portfolio",
  },
];

type Props = {
  className: string;
  render?: ({ icon, label, to }: NavbarItemProps) => React.JSX.Element;
};

export function NavbarElements({ className, render }: Props) {
  return (
    <List className={className} disablePadding>
      {elements.map((element) => {
        return render ? render(element) : <NavbarItem {...element} />;
      })}
    </List>
  );
}

export type NavbarItemProps = {
  icon: React.JSX.Element;
  label: string;
  to: string;
};
export function NavbarItem({ icon, label, to }: NavbarItemProps) {
  return (
    <li>
      <Link to={to}>
        {icon}
        {label}
      </Link>
    </li>
  );
}
