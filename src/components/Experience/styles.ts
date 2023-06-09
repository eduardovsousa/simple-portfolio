import styled from 'styled-components';

export const Section = styled.section`
  width: var(--container-width-lg);
  margin: 0 auto;
  `;

export const Container = styled.div`
margin-top: 8rem
`;

export const ContainerExperience = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  > div {
    background: var(--color-bg-variant);
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);

    :hover {
      background: transparent;
      border-color: var(--color-primary-variant);
      cursor: default;
    }

    h3 {
      text-align: center;
      margin-bottom: 2rem;
      color: var(--color-primary);
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;

    > div {
      width: 80%;
      padding: 2rem;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;

    > div {
      width: 100%;
      padding: 2rem 1rem;
    }
  }
`;

export const Frontend = styled.div``;

export const Backend = styled.div``;

export const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;

  @media screen and (max-width:1024px) {
    padding: 1rem;
  }
`;

export const ExperienceDetails = styled.article`
  display: flex;
  gap: 1rem;

  > .Icon {
    margin-top: 6px;
    color: var(--color-primary);
  }

  @media screen and (max-width: 600px) {
    > .Icon {
      min-width: 16px;
      min-height: 16px;
    }

    gap: 0.5rem;
  }
`;
