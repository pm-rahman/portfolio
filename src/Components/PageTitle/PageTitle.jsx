import { Helmet } from "react-helmet";

const PageTitle =({ title }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mokhlesur-Rahman | {title}</title>
            </Helmet>
        </div>
    );
};

export default PageTitle;