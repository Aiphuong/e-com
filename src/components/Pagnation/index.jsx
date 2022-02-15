import React from 'react'
import { Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const PaginationContent = (props) => {
  let { noOfPages, page, handleChange } = props;
  return (
    <Box component="span">
      <Pagination
        count={noOfPages}
        page={page}
        onChange={handleChange}
        defaultPage={1}
        color="primary"
        size="medium"
        showFirstButton
        showLastButton
      />
    </Box>
  );
}
export default PaginationContent;
