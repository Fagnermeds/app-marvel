import React, { useCallback, useState } from 'react';

import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { Container, LeftButton, Page, RightButton } from './styles';

interface PaginationProps {
  heroesPerPage: number;
  totalHeroes: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ heroesPerPage, totalHeroes, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalHeroes / heroesPerPage);
  const [page, setPage] = useState(1);

  console.log({
    page,
  })

  const next = useCallback(() => {
    if (page === totalPages) {
      return;
    }
    
    setPage(page + 1);

    paginate(page + 1);
  }, [page, paginate, totalPages]);

  const previous = useCallback(() => {
    if (page === 1) {
      return;
    }

    setPage(page - 1);
    
    paginate(page - 1);
  }, [page, paginate]);

  return (
    <Container>
      <LeftButton onClick={previous}>
        <img src={arrowLeft} alt="Previous" />
      </LeftButton>
      <Page>
        <span>{page}</span>
      </Page>
      <span>de {totalPages}</span>
      <RightButton onClick={next}>
        <img src={arrowRight} alt="Next" />
      </RightButton>
    </Container>
  );
}

export default Pagination;