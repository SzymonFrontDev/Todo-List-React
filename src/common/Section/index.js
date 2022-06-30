import { Content, Item } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Content>
        <Item>
            <h2 className="header">{title}</h2>
            {extraHeaderContent}
        </Item>
        {body}
    </Content>
);

export default Section;