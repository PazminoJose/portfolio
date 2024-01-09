import type { IconProps } from "./interfaces/IconProps";

export default function Leaflet({ className }: IconProps) {
  return (
    <svg height="24" width="24" className={className}>
      <path d="m156.4829712 498.5690918c-28.1542206 26.4686279-77.2916718 11.4086609-108.5622101-24.1750488-41.5189867-47.2457276-56.5517225-136.7262879-43.1670928-216.5212403zm32.7320709-30.5106812c-18.2281799-7.7469482-91.4576569-45.5538025-62.4625854-179.7611389-46.4509507-30.5319214-113.1081372-53.4966736-117.3748827-58.4777374 0 0 .1739359 8.0732727-1.9611459 23.9019775l157.6364436 235.3505402c3.916214-7.7184143 14.2997589-13.8781433 24.1621704-21.0136414zm-49.7864227-79.5793457c15.5429382 51.181488 43.0429688 57.2320251 63.3149414 69.8901978l205.8414612-440.3770981h2.4346619l-191.1070405 455.002739c19.3815613 18.2740479 45.2353973 36.6472473 84.0380707 27.9019775 159.9569702-28.5730591 196.4768677-286.6468964 109.9515076-500.8968811-101.7549439 69.7935562-177.9046936 107.4278717-227.5820465 181.3138885-38.6379547 57.4669037-68.6120529 138.396103-46.8915558 207.1651764z" />
    </svg>
  );
}
