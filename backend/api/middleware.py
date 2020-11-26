from starlette.exceptions import ExceptionMiddleware
from starlette.middleware import Middleware
from starlette.middleware.gzip import GZipMiddleware
from starlette.middleware.httpsredirect import HTTPSRedirectMiddleware

from backend.api import settings

middleware = []

if settings.HTTPS_ONLY:  # pragma: nocover
    middleware += [Middleware(HTTPSRedirectMiddleware)]

if settings.GZIP_COMPRESSION:
    middleware += [Middleware(GZipMiddleware)]

middleware += [
    Middleware(ExceptionMiddleware),
]
