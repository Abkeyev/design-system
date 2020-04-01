/// <reference types="react" />
interface BccTypographyProps {
    children: any;
    weight?: 'normal' | 'medium' | 'bold';
    block?: boolean;
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p2l' | 'p3' | 'p4';
    className?: string;
}
declare const BccTypography: (props: BccTypographyProps) => JSX.Element;
export default BccTypography;
