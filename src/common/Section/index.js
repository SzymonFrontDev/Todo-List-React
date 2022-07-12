import { Content, Item } from "./styled";

const Section = ({ title, body, extraHeaderContent, extraSectionContent }) => (
    <Content>
        <Item>
            <h2 className="header">{title}</h2>
            {extraSectionContent}
            {extraHeaderContent}
        </Item>
        {body}
    </Content>
);

export default Section;