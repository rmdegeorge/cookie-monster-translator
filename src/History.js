import React from 'react';
import styled from 'styled-components'

const HistoryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

function History(props) {
  return (
    <HistoryContainer>
      History Page
    </HistoryContainer>
  );
}

export default History;