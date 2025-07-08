import { InboxIcon, PlusIcon } from '@icons';

const svgComponents = {
  plus: PlusIcon,
  inbox: InboxIcon,
};

const FallbackSvg = ({ props }) => (<svg {...props}></svg>);

/**
 * @param {string}  name  - svg sprite name
 * @param {any}     props - other props
 * */

export const Icon = ({ name, props }) => {
  const Svg = svgComponents[name] || FallbackSvg;
  return (
    <Svg {...props} />
  );
};
