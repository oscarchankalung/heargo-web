import { useMediaQuery } from 'react-responsive';

const BigScrren = ({ children }) => {
  const isBigScrren = useMediaQuery({ minWidth: 1500 });
  return isBigScrren ? children : null;
};

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1500 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export { Desktop, Tablet, Mobile, BigScrren };
