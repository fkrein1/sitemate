import { useMutation, useQuery } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import sitemateLogo from '../assets/sitemate.png';
import { IssueCreate, issueServices } from '../services/issue.services';
import * as S from './home.styles';

export function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { data, refetch } = useQuery({
    queryFn: () => issueServices.getAll(),
  });

  const createIssueMutation = useMutation({
    mutationFn: (issue: IssueCreate) => {
      return issueServices.create(issue);
    },
    onSuccess: () => {
      refetch();
      setDescription('');
      setTitle('');
    },
  });

  const deleteIssueMutation = useMutation({
    mutationFn: (id: string) => {
      return issueServices.delete(id);
    },
    onSuccess: () => refetch(),
  });

  const handleCreateIssue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createIssueMutation.mutate({ description, title });
  };

  return (
    <S.Container>
      <S.LogoImage>
        <img src={sitemateLogo} />
      </S.LogoImage>

      <S.IssueForm onSubmit={handleCreateIssue}>
        <S.TitleInput
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.DescriptionInput
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <S.SubmitButton type="submit">Create</S.SubmitButton>
      </S.IssueForm>
      {data?.map((item) => (
        <S.IssueContainer key={item.id}>
          <S.TitleText>{item.title}</S.TitleText>
          <S.DescriptionText>{item.title}</S.DescriptionText>
          <S.DeleteButton
            type="button"
            onClick={() => deleteIssueMutation.mutate(item.id)}
          >
            Delete
          </S.DeleteButton>
        </S.IssueContainer>
      ))}
    </S.Container>
  );
}
