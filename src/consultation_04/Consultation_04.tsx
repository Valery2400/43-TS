import React from 'react'
import { Avatar, InfoContainer, PageWrapper, UserCard, UserInfo, UserTitle } from "./styles";

export default function Consultation_04() {
    const RANDOM_USER_URL: string = "https://randomuser.me/api/";

  return (
    <PageWrapper>
        <UserCard>
            <Avatar src="" alt="User Avatar" />
            <InfoContainer>
            <UserTitle>Full Name</UserTitle>
            <UserInfo></UserInfo>
            </InfoContainer>
            <InfoContainer>
            <UserTitle>Email</UserTitle>
            <UserInfo></UserInfo>
            </InfoContainer>
            <InfoContainer>
            <UserTitle>Phone</UserTitle>
            <UserInfo></UserInfo>
            </InfoContainer>
            </UserCard>
            </PageWrapper>
  )
}
