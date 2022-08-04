import styled from "styled-components";

const PageWrapper = styled.div`
    border-radius: 5px;
    text-align: center;
    display: grid;
    place-items: center;
    min-height: 30rem;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
        min-height: 25vh;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        min-height: 35vh;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        min-height: 50vh;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
        min-height: 65vh;
    }
`;

const ErrorCode = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 4rem;
    font-weight: 900;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        font-size: 70pt;
    }
`;

const ErrorMessage = styled.h2`
    padding: 0;
    padding-bottom: 2rem;
    margin: 0;
    font-size: 2rem;
    font-weight: 700;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        font-size: 3rem;
    }
`;

const ErrorTip = styled.p`
    padding: 0;
    margin: 0;
    color: ${(p) => p.theme.colors.foregroundGrey};
`;

interface ErrorPageProps {
    code: string;
    message: string;
}

const ErrorPage = ({ code, message }: ErrorPageProps) => {
    return (
        <PageWrapper>
            <div>
                <ErrorCode>{code}</ErrorCode>
                <ErrorMessage>{message}</ErrorMessage>
                <ErrorTip>Try again later</ErrorTip>
            </div>
        </PageWrapper>
    );
};

export default ErrorPage;
