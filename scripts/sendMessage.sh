TEXT=$(envsubst < ./scripts/notifications/$1.md)

# TEXT=$(envsubst < ./notifications/success.md)

# TEXT="${TEXT// /+}"
# TEXT="${TEXT//\\[[:space:]]/\%0A}"
# TEXT="${TEXT//[[:space:]]/\%0A}"

URL="https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage"

## For HTTP variant
# URL_PARAMS="chat_id=$TELEGRAM_USER_ID\
# &disable_web_page_preview=1\
# &disable_notification=$MR_DISABLE_NOTIFICATION\
# &parse_mode=markdown\
# &text=$TEXT"

wget \
  --no-check-certificate \
  --method POST \
  --quiet \
  --output-document=/dev/null \
  --timeout=0 \
  --header 'Content-Type: application/json' \
  --body-data "{
        \"chat_id\": $TELEGRAM_CHAT_ID,
        \"disable_web_page_preview\": 1,
        \"parse_mode\": \"markdown\",
        \"text\": \"$TEXT\"
}" \
  $URL
