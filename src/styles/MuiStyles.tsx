import { styled, Theme, Button, Typography } from "@mui/material";

export const NavTypography = styled(Typography)(({ theme }: { theme: Theme }) => ({
  variant: "h4",
  color: theme.palette.secondary.dark,
}));

export const AvatarButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  variant: "text",
  color: theme.palette.secondary.dark,
  fontSize: "0.75rem",
  minWidth: 60,
}));
