import { styled, Box, Theme } from "@mui/material";

export const AppWrapper = styled(Box)(({}: { theme: Theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, [col] 1fr)",
  gridTemplateRows: "[row] 40px [row] auto",
  height: "100vh",
  fontSize: "150%",
  /* "&.noHeader": {
    gridTemplateRows: "[row] 0 [row] auto [row] 0",
  }, */
}));

export const AppHeader = styled(Box)(({ theme }: { theme: Theme }) => ({
  gridColumn: "col / span 4",
  gridRow: "row 1",
  background: theme.palette.background.paper,
  color: theme.palette.secondary.light,
  borderBottom: "4px solid",
  borderBottomColor: theme.palette.grey[500],
  backgroundColor: "lightcoral",
  height: "40px",
}));

export const AppBody = styled(Box)(({}: { theme: Theme }) => ({
  gridColumn: "col / span 4",
  /*   gridRow: "row 2", */
  overflow: "hidden",
}));

/* export const AppFooter = styled(Box)(({ theme }: { theme: Theme }) => ({
  gridColumn: "col / span 4",
  gridRow: "row 3",
  borderTop: "4px solid",
  borderTopColor: theme.palette.grey[500],
  background: theme.palette.primary.dark,
  //backgroundColor: 'violet',

  zIndex: theme.zIndex.drawer + 1,
})); */

export const AppBodyLayout = styled(Box)(({}: { theme: Theme }) => ({
  display: "grid",
  gridGap: "0px",
  //   gridTemplateColumns: "[col] 30% [col] 1fr",
  gridTemplateRows: "1fr",
  height: "100%",
  transition: "700ms",
  backgroundColor: "darkolivegreen",
  /*  "&.visibleSidePanel": {
    gridGap: 0,
    overflow: "hidden",
    gridTemplateColumns: "[col] 0 [col] 1fr",
  }, */
  /*  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "[col] 1fr",
    gridTemplateRows: "[row] 1fr [row] 25%",
    "&.visibleSidePanel": {
      gridTemplateColumns: "[col] 1fr",
      gridTemplateRows: "[row] 1fr [row] 0",
    },
  }, */
}));

// export const AppBodyLayoutContent = styled(Box)(({ theme }: { theme: Theme }) => ({
//   gridRow: "row 0",
//   gridColumn: "col 2/ span 1",
//   /*  backgroundColor: "cyan", */
//   [theme.breakpoints.down("md")]: {
//     gridColumn: "col",
//     gridRow: "row 1",
//   },
//   position: "relative",
// }));
