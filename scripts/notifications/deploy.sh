wget \
  --no-check-certificate \
  --quiet \
  --output-document=/dev/null \
  --method POST \
  --timeout=0 \
  --header 'Content-Type: application/json' \
  --body-data "{
        \"chat_id\": $TELEGRAM_CHAT_ID,
        \"parse_mode\": \"markdown\",
        \"text\": \"$1\"
}" \
   "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage"
