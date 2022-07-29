import styled from "styled-components";

const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a button {
        width: 100%;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        flex-direction: row;
    }
`;

const LinkButtonRow = ({ children }: { children: React.ReactNode }) => {
    return <Row>{children}</Row>;
};

export default LinkButtonRow;
