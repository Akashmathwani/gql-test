import { v4 as uuid } from "uuid";

export function traceRequest(req, res, next) {
  const { headers } = req;
  const traceId = headers["traceId"] || headers["traceid"] || uuid();
  req.headers.traceId = traceId;
  next();
}

export function traceResponse(req, res, next) {
  res.set("TraceId", req.headers.traceId);
  next();
}
