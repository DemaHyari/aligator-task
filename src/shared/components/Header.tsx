import { dateFormater } from "../../helper/dateFormater.helper";

interface Props {
  title: string;
  fromDate: number;
  toDate: number;
}

const Header = (props: Props) => {
  const { title, fromDate, toDate } = props;

  return (
    <div className="sec-header">
      <div className="sec-header__title">{title}</div>
      <div className="sec-header__date">
        {dateFormater(fromDate)} - {dateFormater(toDate)}
      </div>
    </div>
  );
};

export default Header;
