import PropTypes from 'prop-types';
import { SelectionTitle } from './Sections.styled';

export const Sections = ({ title, children }) => {
  return (
    <section>
      <SelectionTitle>{title}</SelectionTitle>
      {children}
    </section>
  );
};

Sections.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
