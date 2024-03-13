import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const LogoImage = styled.div`
  padding-top: 100px;
  padding-bottom: 20px;
  img {
    width: 200px;
  }
`;

export const IssueForm = styled.form`
  gap: 4px;
  display: flex;
`;

export const TitleInput = styled.input`
  padding: 6px 8px;
  width: 200px;
`;

export const DescriptionInput = styled.input`
  padding: 6px 8px;
  width: 300px;
`;

export const SubmitButton = styled.button`
  padding: 6px 8px;
`;

export const IssueContainer = styled.div`
  gap: 4px;
  display: flex;
`;

export const TitleText = styled.p`
  padding: 6px 8px;
  width: 200px;
  background: white;
`;

export const DescriptionText = styled.p`
  padding: 6px 8px;
  width: 300px;
  background: white;
`;

export const DeleteButton = styled.button`
  padding: 6px 8px;
`;
