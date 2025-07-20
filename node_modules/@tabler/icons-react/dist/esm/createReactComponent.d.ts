import * as react from 'react';
import { IconNode, IconProps, Icon } from './types.js';

declare const createReactComponent: (type: "outline" | "filled", iconName: string, iconNamePascal: string, iconNode: IconNode) => react.ForwardRefExoticComponent<IconProps & react.RefAttributes<Icon>>;

export { createReactComponent as default };
