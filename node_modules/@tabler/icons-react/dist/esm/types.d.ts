import { ReactSVG, FunctionComponent, ForwardRefExoticComponent, RefAttributes } from 'react';
export { ReactNode } from 'react';

type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][];
interface IconProps extends Partial<Omit<React.ComponentPropsWithoutRef<'svg'>, 'stroke'>> {
    size?: string | number;
    stroke?: string | number;
    title?: string;
}
type Icon = FunctionComponent<IconProps>;
type TablerIcon = ForwardRefExoticComponent<Omit<IconProps, "ref"> & RefAttributes<Icon>>;

export type { Icon, IconNode, IconProps, TablerIcon };
