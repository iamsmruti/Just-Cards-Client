const Logo = () => {
  return (
    <div>
      <p className="text-[48px] font-bold text-bluish">
        Just <span className="text-reddish">Cards</span>
      </p>
      <p className="text-sm mt-[-10px]">
        The best Flash Cards App on the planet
      </p>
    </div>
  );
};

export const LogoSmall = () => {
  return (
    <div>
      <p className="text-[36px] font-bold text-bluish">
        Just <span className="text-reddish">Cards</span>
      </p>
      <p className="text-[10px] mt-[-10px]">
        The best Flash Cards App on the planet
      </p>
    </div>
  );
};

export default Logo;
