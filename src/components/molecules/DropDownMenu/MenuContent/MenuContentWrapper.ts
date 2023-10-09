import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const MenuContentWrapper = styled.div`
  transition: max-height 0.7s cubic-bezier(0, 1, 0, 1);
  position: absolute;
  z-index: 2;
  top: 100%;
  width: 100%;
  background-color: ${themeGet('colors.white')};

  &.opened {
    max-height: 500px;
    transition: max-height 1s ease-in-out;
    border-radius: 2px;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    button {
      border: none;
      padding: 15px;
      background-color: transparent;
      outline: none;
      text-transform: capitalize;
      text-align: left;

      &:hover {
        background-color: ${themeGet('colors.lightGray')};
      }
    }

    .selected {
      background-color: ${themeGet('colors.lightGray')};
      font-weight: bold;
    }
  }
`;

export default MenuContentWrapper;
