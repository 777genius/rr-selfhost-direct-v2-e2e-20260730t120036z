# Disposable gateway canary

One fresh OpenRouter review with relay diagnostics 133d2a77.
Previous run 37611223780 is not replayed.

Native HTTP400 JSON-shape diagnostic canary for reviewed commit ff6ef501b252a2ad864845cfc41ea8aeb252b70f.
Prior attempt 38051445049/1 and its unknown effect remain retained.

Native error body diagnostics for reviewed commit f4705234a5b8e690fb3b7d1cb65c1c31114b597a.
Prior attempt 38053626875/1 and its unknown effect remain retained.

Native safe HTTP400 projection for reviewed commit ba34af229a755fee45dccc6ae0750a3c566996ee.
Prior attempt 38055165336/1 and its unknown effect remain retained.

Native MiMo wire default-tier compatibility canary for reviewed commit 5889325703cff4c242f866b877869f6528773185.
Prior attempt 38059026806/1 and its unknown effect remain retained.
API lease ownership deadline clamp for reviewed commit c2650d56c1f621fb9c7ebec9cbed192cf4ca8bf1.
Long OIDC continuation uses unchanged producer 1f716776ea5fa4f8b27d106a6145c016c7554e9c and owner native79345.
Prior attempt 38082164486/1 and its pending history remain retained without replay.

Intentional new long acceptance with native9cbbd14f closed SSE read diagnostic and reviewed Gateway4e99d817. No timeout change; previous380858 remains frozen.

Intentional long OIDC acceptance after API lease-renewal report ceiling fix 2986b337c0faee9eeb3832020e307f8c3db80385.
Previous attempt 38090224318/1 and its unknown effects remain retained without replay.

## OpenRouter request-budget remediation

The preceding current canary completed eight admitted provider requests and the ninth was denied before dispatch with the persisted limit code (8/8). The isolated TEST profile and run-control allowance now admit at most 32 requests; concurrency remains one, request and output limits remain 1 MiB, the token ceiling remains 32768 per request, and the normal 15-minute authorization and caller budget are unchanged. This new head validates tools, a strict nonempty accepted final review, and same-head App publication after that configuration change.
