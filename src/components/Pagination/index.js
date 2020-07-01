import React from 'react';
import { pagix } from 'pagix';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import { Container, Info } from './styles';

const Paginate = ({ records, limit, current, delta, fixed, onChange }) => {
  const { start, end, middle, prev, next, from, to } = pagix({
    records,
    limit,
    current,
    delta,
    fixed,
  });

  const goToPrev = () => onChange(prev);
  const goToNext = () => onChange(next);

  return (
    <Container>
      <Info>
        Mostrando <strong> {from}</strong>-<strong>{to} </strong> de{' '}
        <span>{records}</span>
      </Info>

      {records > limit && (
        <>
          <Pagination aria-label="Page navigation">
            <PaginationItem
              disabled={current === 1}
              onClick={() => onChange(1)}
              title="First"
            >
              <PaginationLink first href="#" />
            </PaginationItem>

            <PaginationItem
              disabled={current === 1}
              onClick={() => {
                if (current === 1) return;
                onChange(current - 1);
              }}
              title="Prev"
            >
              <PaginationLink previous href="#" />
            </PaginationItem>

            {start.map(idx => (
              <PaginationItem
                key={idx}
                active={current === idx}
                onClick={() => onChange(idx)}
              >
                <PaginationLink href="#">{idx}</PaginationLink>
              </PaginationItem>
            ))}

            {prev && (
              <PaginationItem onClick={goToPrev}>
                <PaginationLink href="#">...</PaginationLink>
              </PaginationItem>
            )}

            {middle.map(idx => (
              <PaginationItem
                key={idx}
                active={current === idx}
                onClick={() => onChange(idx)}
              >
                <PaginationLink href="#">{idx}</PaginationLink>
              </PaginationItem>
            ))}

            {next && (
              <PaginationItem onClick={goToNext}>
                <PaginationLink href="#">...</PaginationLink>
              </PaginationItem>
            )}

            {end.map(idx => (
              <PaginationItem
                key={idx}
                active={current === idx}
                onClick={() => onChange(idx)}
              >
                <PaginationLink href="#">{idx} </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem
              onClick={() => {
                if (current === end[0]) return;
                onChange(current + 1);
              }}
              disabled={current === end[0]}
              title="Next"
            >
              <PaginationLink next href="#" />
            </PaginationItem>

            <PaginationItem
              onClick={() => onChange(end[0])}
              disabled={current === end[0]}
              title="Last"
            >
              <PaginationLink last href="#" />
            </PaginationItem>
          </Pagination>
        </>
      )}
    </Container>
  );
};

Paginate.propTypes = {
  records: PropTypes.number.isRequired,
  limit: PropTypes.number,
  current: PropTypes.number.isRequired,
  delta: PropTypes.number,
  fixed: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Paginate.defaultProps = {
  limit: 10,
  delta: 1,
  fixed: 1,
};

export default Paginate;
