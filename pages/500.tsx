import ErrorPage from "../components/error/ErrorPage";
import PageHeading from "../components/layout/global/PageHeading";
import PagePadding from "../components/layout/global/PagePadding";
import PageTitle from "../components/layout/global/PageTitle";

export default function NotFound() {
    return (
        <PagePadding>
            <PageTitle>{`Internal Server Error - Revolt`}</PageTitle>
            <ErrorPage code="500" message="Internal Server Error" />
        </PagePadding>
    );
}
