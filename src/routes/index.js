import { Router } from "express";
import { universities, statistics } from "../controllers";
import throttle from "express-throttle";
import apicache from "apicache";

const router = Router();
let cache = apicache.options({
  headers: {
    "cache-control": "no-cache",
  },
}).middleware;

router.get(
  "/getAllUniversities",
  throttle({ burst: 5, period: "1s" }),
  cache("1 hour"),
  (req, res) => universities.getAllUniversities(req, res)
);
router.get(
  "/getUniversityStatistics",
  throttle({ burst: 5, period: "1s" }),
  cache("1 hour"),
  (req, res) => statistics.getUniversityStatistics(req, res)
);

export default router;
