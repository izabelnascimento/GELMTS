import { Button, IconButton, List, ListItem } from "@mui/material";
import logo from "../../assets/logoLMTS.svg";
import Drawer from "@mui/material/Drawer";
import ItemSideBar from "../ItemSideBar/ItemSideBar";
import styles from "./header.module.css";

import MenuIcon from "@mui/icons-material/Menu";
import gerenciarProjeto from "../../assets/icon-sidebar/gerenciar-projeto.svg";
import gerenciarBolsa from "../../assets/icon-sidebar/gerenciar-bolsa.svg";
import gerenciarEstudantes from "../../assets/icon-sidebar/gerenciar-estudante.svg";
import gerenciarOrientador from "../../assets/icon-sidebar/gerenciar-orientador.svg";
import gerenciarReuniao from "../../assets/icon-sidebar/gerenciar-reuniao.svg";
import gerenciarDocs from "../../assets/icon-sidebar/gerenciar-docs.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [controlSideBar, setControlSideBar] = useState(false);

  return (
    <section className={styles.headerMain}>
      <Drawer variant="permanent">
        <IconButton
          onClick={() => setControlSideBar(true)}
          sx={{ marginTop: "20px" }}
        >
          <MenuIcon />
        </IconButton>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          <ItemSideBar img={gerenciarProjeto} url={"projeto"} />
          <ItemSideBar img={gerenciarReuniao} url={"reunião"} />
          <ItemSideBar img={gerenciarOrientador} url={"orientadores"} />
          <ItemSideBar img={gerenciarEstudantes} url={"estudantes"} />
          <ItemSideBar img={gerenciarBolsa} url={"bolsas"} />
          <ItemSideBar img={gerenciarDocs} url={"documentos"} />
        </List>
      </Drawer>

      <Drawer open={controlSideBar} onClose={() => setControlSideBar(false)}>
        <div className={styles.logo}>
          <Button onClick={() => navigate("/")}>
            <img src={logo} alt="Logo do LMTS" />
          </Button>
        </div>
        <List className={styles.SideBarContainer}>
          <ItemSideBar
            img={gerenciarProjeto}
            url={"projeto"}
            text="Gerenciar Projeto"
          />
          <ItemSideBar
            img={gerenciarReuniao}
            url={"reunião"}
            text="Gerenciar Reunião"
          />
          <ItemSideBar
            img={gerenciarOrientador}
            url={"orientadores"}
            text="Gerenciar Orientadores"
          />
          <ItemSideBar
            img={gerenciarEstudantes}
            url={"estudantes"}
            text="Gerenciar Estudantes"
          />
          <ItemSideBar
            img={gerenciarBolsa}
            url={"bolsas"}
            text="Gerenciar Bolsas"
          />
          <ItemSideBar
            img={gerenciarDocs}
            url={"documentos"}
            text="Gerenciar Documentos"
          />
        </List>
      </Drawer>
    </section>
  );
};

export default Header;
