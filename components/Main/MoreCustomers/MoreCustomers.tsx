import React from "react";
import * as S from "./styles"

export default function MoreCustomers(): JSX.Element {
  return(
    <S.MoreCustomers img="/images/morecustomers.png">
          <S.MoreCustomersContent>
            <S.MoreCustomersTitle>Reach More Customers</S.MoreCustomersTitle>
            <S.MoreCustomersLink href="#">LEARN NOW</S.MoreCustomersLink>
          </S.MoreCustomersContent>
        </S.MoreCustomers>
  )
}
