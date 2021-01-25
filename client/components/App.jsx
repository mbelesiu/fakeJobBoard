import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import JobCard from "./JobCard.jsx"
// import axios from 'axios';

function App() {
  return (
    <Container>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 75%;

`


export default App;