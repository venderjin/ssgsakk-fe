import SearchResult from "@/components/pages/productList/SearchResult";

async function fetchProductList(keyword: string) {
  const response = await fetch(
    `${process.env.BASE_URL}/products/search?keyword=${keyword}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data.result;
}

const searchProductListpage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const res = await fetchProductList(searchParams.keyword as string);

  return (
    <>
      <SearchResult productSeqList={res} />
    </>
  );
};

export default searchProductListpage;
