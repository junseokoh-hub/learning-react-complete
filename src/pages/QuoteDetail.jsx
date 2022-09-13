import React, { useEffect } from "react";
import { useParams, Outlet, Link, useMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/useHttp";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const commentMatch = useMatch(`/quotes/${params.quoteId}/comments`);

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (error) return <p className="centered">{error}</p>;

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <div className="centered">
        {!commentMatch ? (
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
};

export default QuoteDetail;
