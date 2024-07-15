import React from 'react';
import { Breadcrumb, BreadcrumbItem, Label } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbComponent = (props) => {
  const {parent, title} = props;

  return (
    <Breadcrumb>
      <BreadcrumbItem><Link to={'/homepage'}><Label>Home</Label></Link></BreadcrumbItem>
      {
        parent && <BreadcrumbItem active><Label>{parent}</Label></BreadcrumbItem>
      }
      {
        title && <BreadcrumbItem active><Label>{title}</Label></BreadcrumbItem>
      }
    </Breadcrumb>
  )
}

export default BreadcrumbComponent