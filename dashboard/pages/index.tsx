
import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { LogoLigth } from "../components/icons/Logo";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
export default function Home() {
  
  const session = useSession()
  const supabase = useSupabaseClient()

  console.log('-----------------',session, supabase )

  console.log(session, supabase)
  return (
    <>
      <Navbar>
        <Navbar.Brand>
        <LogoLigth />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link isActive href="#">Criar links</Navbar.Link>
          <Navbar.Link href="#">Versão pro</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

    </>
  )
}


export const getServerSideProps:GetServerSideProps = async (ctx:GetServerSidePropsContext) => {

  const {req} = ctx;
  // const { user }  = {user : ''};

  // // if (!user) {
  //   return {
  //     redirect: {
  //       destination: '/signin',
  //       permanent: false,
  //     },
  //   }
  // // }

  return {
    props: {  },
  }
}
