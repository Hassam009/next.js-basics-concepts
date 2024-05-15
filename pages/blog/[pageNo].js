import { useRouter } from "next/router";

const PageNo = () => {
    const router = useRouter();
    const { pageNo } = router.query; // Destructure pageNo directly from router.query

    return (
        <>
            <h1>My Blog No is {pageNo}</h1>
        </>
    );
};

export default PageNo;
