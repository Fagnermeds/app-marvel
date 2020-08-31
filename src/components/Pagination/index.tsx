import React, { useCallback, useState } from 'react';

import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { Container, LeftButton, Page, RightButton } from './styles';

interface PaginationProps {
  heroesPerPage: number;
  totalHeroes: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ heroesPerPage, totalHeroes, paginate }) => {
  const totalPages = Math.ceil(totalHeroes / heroesPerPage);
  const [page, setPage] = useState(1);

  // for (let index = 1; index < totalPages; index++) {
  //   pageNumbers.push(1); 
  // }

  const next = useCallback(() => {
    if (page === totalPages) {
      return;
    }
    
    setPage(page + 1);

    paginate(page);
  }, [page, paginate, totalPages]);

  const previous = useCallback(() => {
    if (page === 1) {
      return;
    }

    setPage(page - 1);
    
    paginate(page);
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