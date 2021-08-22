import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

function CourseDetail(): ReactElement {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}번 강의</div>;
}

export default CourseDetail;
