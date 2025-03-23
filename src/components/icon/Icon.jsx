import icons24 from '@/assets/svg/icons-24.svg?no-inline';

/**
 *
 * @param {24}      size      - icon size
 * @param {string}  iconName  - svg sprite name
 * @param {string}  className - className
 *
 * */

const icons = {
  24: icons24,
};

export const Icon = ({name, size, className = ''}) => {
  return (
    <svg className={className}>
      <use href={icons[size] + '#' + name}></use>
    </svg>
  );
};