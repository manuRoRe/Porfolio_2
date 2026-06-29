interface Props {
  link: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const BoxLink = ({ link, icon: Icon }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-network"
    >
      <Icon className="h-6 w-6" />
    </a>
  );
};
